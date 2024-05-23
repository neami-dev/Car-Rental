import {
    BookUserIcon,
    CarFrontIcon,
    CheckCheckIcon,
    Copy,
    Plus,
    User,
    Users,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";
import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Loading from "@/components/loading";
import { useCookies } from "react-cookie";
// const jsxElement = (
//   <>
//       <Skeleton className=" h-10 w-[100%] rounded-sm mb-2" />
//       <hr />
//       <Skeleton className=" h-10 w-[100%] rounded-sm my-2" />
//       <hr />
//       <Skeleton className=" h-10 w-[100%] rounded-sm my-2" />
//       <hr />
//       <Skeleton className=" h-10 w-[100%] rounded-sm mt-2" />
//   </>
// );
export default function Dashboard() {
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});
    const [textNoResults, setTextNoResults] = useState(<Loading />);
    const [rentalBooking, setRentalBooking] = useState([]);
    const [users, setUsers] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [cookies, setCookie] = useCookies(["token"]);
    const baseURL = "http://127.0.0.1:8000/api";

    const getVehicles = async () => {
        const response = await fetch(`${baseURL}/vehicles`);
        const result = await response.json();
        setVehicles(result?.data);
        console.log({ result });
    };
    const getUsers = async () => {
        const response = await fetch(`${baseURL}/users`);
        const result = await response.json();
        setUsers(result?.data);
        console.log({ result });
    };
    const getRentalBooking = async () => {
        const response = await fetch(`${baseURL}/rentalBooks`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${cookies?.token}`,
            },
        });
        const result = await response.json();
        setRentalBooking(result?.data);
        console.log({ result });
    };
    useEffect(() => {
        getVehicles();
        getRentalBooking();
        getUsers();
    }, []);

    const columns = [
        {
            accessorKey: "id",
            header: () => <div className="text-center">ID</div>,
            cell: ({ row }) => (
                <div className="text-[12px] text-center text-[#a9a7a7] md:text-[14px]">
                    {row.getValue("id") || "null"}
                </div>
            ),
        },
        {
            accessorKey: "startDate",
            header: ({ column }) => (
                <div
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                    className="text-center flex justify-center items-center cursor-pointer rounded-sm hover:bg-gray-200"
                >
                    PickUp Date <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
            ),
            cell: ({ row }) => (
                <div className="lowercase text-center text-[#a9a7a7] text-[12px] md:text-[14px]">
                    {row.getValue("startDate") || "null"}
                </div>
            ),
        },
        {
            accessorKey: "endDate",
            header: ({ column }) => (
                <div className="text-center flex justify-center items-center cursor-pointer rounded-sm hover:bg-gray-200">
                    Return Date
                </div>
            ),
            cell: ({ row }) => (
                <div className="lowercase text-center text-[#a9a7a7] text-[12px] md:text-[14px]">
                    {row.getValue("endDate") || "null"}
                </div>
            ),
        },
        {
            accessorKey: "price",
            header: () => (
                <>
                    <div className="text-center ">Price</div>
                </>
            ),
            cell: ({ row }) => {
                return (
                    <div className="text-center text-[#a9a7a7] text-[12px] md:text-[14px]">
                        {row.getValue("price") || "null"}
                    </div>
                );
            },
        },
        {
            accessorKey: "userId",
            header: () => <div className="text-center">user Id</div>,
            cell: ({ row }) => {
                return (
                    <div className="text-center text-[#a9a7a7] text-[12px] md:text-[14px]">
                        {row.getValue("userId") || "null"}
                    </div>
                );
            },
        },
        {
            accessorKey: "vehicleId",
            header: () => <div className="text-center">vehicle Id</div>,
            cell: ({ row }) => {
                return (
                    <div className="text-center text-[#a9a7a7] text-[12px] md:text-[14px]">
                        {JSON.stringify(row.getValue("vehicleId")) || "null"}
                    </div>
                );
            },
        },

        {
            id: "actions",
            header: () => <div className="text-center">Actions</div>,

            cell: ({ row }) => {
                const employee = row.original;

                return (
                    <div className="w-full flex justify-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="h-8 w-8 p-0">
                                    <span className="sr-only">Open menu</span>
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem
                                    onClick={() => {
                                        navigator.clipboard.writeText("jjj");
                                        toast({
                                            description:
                                                "it copied successfully",
                                        });
                                    }}
                                >
                                    <div className="flex cursor-pointer">
                                        <Copy className="mr-2" size={18} />
                                        Copy ID
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                {/* <div>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <div className=" flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-[#f2f3f2]  ">
                                                <Trash2
                                                    className="mr-2"
                                                    size={18}
                                                />
                                                Delete
                                            </div>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Are you absolutely sure?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be
                                                    undone. This will
                                                    permanently delete account
                                                    and remove data from our
                                                    servers.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>
                                                    Cancel
                                                </AlertDialogCancel>
                                                <AlertDialogAction className="bg-red-700">
                                                    Continue
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div> */}
                                <DropdownMenuSeparator />

                                <DropdownMenuSeparator />
                                <div> </div>
                                <DropdownMenuSeparator />
                                <Link
                                    className=" flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-[#f2f3f2]  "
                                    to=""
                                >
                                    <BookUserIcon className="mr-2" size={18} />
                                    Details
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                );
            },
        },
    ];
    const table = useReactTable({
        data: rentalBooking || [],
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    const itemStyle =
        "bg-[#222222] rounded-lg w-[260px] h-[115px] flex flex-col justify-evenly ";
    return (
        <div>
            <section className=" grid justify-center w-full mx-auto pt-6">
                <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                    <li className={`${itemStyle}`}>
                        <div className="flex justify-between px-5 w-full ">
                            <span className=" text-4xl ">{users?.length}</span>
                            <span className=" bg-[#f5B754] p-2 rounded-full">
                                <Users className="text-white" />
                            </span>
                        </div>
                        <h3 className=" ml-5 text-lg font-bold text-[#e0dcdc]">
                            Total customers
                        </h3>
                    </li>
                    <li className={`${itemStyle}`}>
                        <div className="flex justify-between px-5 w-full ">
                            <span className=" text-4xl font-semibold">
                                {vehicles?.length}
                            </span>
                            <span className=" bg-[#f5B754] p-2 rounded-full">
                                <CarFrontIcon className="text-white" />
                            </span>
                        </div>
                        <h3 className=" ml-5 text-lg font-bold text-[#e0dcdc]">
                            total vihceles
                        </h3>
                    </li>
                    <li className={`${itemStyle}`}>
                        <div className="flex justify-between px-5 w-full ">
                            <span className=" text-4xl font-semibold">9</span>
                            <span className=" bg-[#f5B754] p-2 rounded-full">
                                <CheckCheckIcon className="text-white" />
                            </span>
                        </div>
                        <h3 className=" ml-5 text-lg font-bold text-[#e0dcdc]">
                            completed rentals
                        </h3>
                    </li>
                    <li className={`${itemStyle}`}>
                        <div className="flex justify-between px-5 w-full ">
                            <span className=" text-4xl font-semibold">
                                {rentalBooking?.length}
                            </span>
                            <span className=" bg-[#f5B754] p-2 rounded-full">
                                <CheckCheckIcon className="text-white" />
                            </span>
                        </div>
                        <h3 className=" ml-5 text-lg text-[#e0dcdc] font-bold">
                            completed rentals
                        </h3>
                    </li>
                </ul>
            </section>

            <div className="w-[80%] flex flex-col m-auto gap-8 mt-6 justify-center items-center md:flex-row  flex-wrap  ">
                <div className="  bg-[#222222] w-full md:w-[48%] rounded-lg p-4">
                    <h2 className="text-[#f5B754] text-xl p-3 font-semibold">
                        New cars
                    </h2>
                    <ul>
                        {vehicles?.slice(-3)?.map((vehicle) => {
                            return (
                                <li key={vehicle?.id}>
                                    <hr />
                                    <div className="flex items-center p-3 gap-2">
                                        <CarFrontIcon /> {vehicle?.make}{" "}
                                        {vehicle?.model}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="  bg-[#222222] w-full md:w-[48%] rounded-lg p-4">
                    <h2 className="text-[#f5B754] text-xl p-3 font-semibold">
                        New customers
                    </h2>
                    <ul>
                        {users?.slice(-3)?.map((user) => {
                            return (
                                <li key={user?.id}>
                                    <hr />
                                    <div className="flex items-center p-3 gap-2">
                                        <User /> {user?.firstName}{" "}
                                        {user?.lastName}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <section className="flex justify-center lg:w-[85%] mt-9 mx-auto ">
                <div className=" w-full m-auto mx-3 px-4 bg-[#222222] rounded-lg">
                    <div className="w-full flex py-4 justify-between">
                        <Input
                            placeholder="Filter user Id..."
                            value={
                                table.getColumn("userId")?.getFilterValue() ??
                                ""
                            }
                            onChange={(event) =>
                                table
                                    .getColumn("userId")
                                    ?.setFilterValue(event.target.value)
                            }
                            className="max-w-sm bg-[#454343]"
                        />

                        {/* <div className="flex items-center ">
                            <Button
                                size="lg"
                                className="bg-[#f5B754] min-w-[130px]   hover:bg-white text-black font-bold text-lg rounded-full "
                            >
                                <Link
                                    to="/add-renatl-booking"
                                    className="flex items-center gap-2"
                                >
                                    add <Plus />
                                </Link>
                            </Button>
                        </div> */}
                    </div>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                {table.getHeaderGroups().map((headerGroup) => (
                                    <TableRow key={headerGroup.id}>
                                        {headerGroup.headers.map((header) => {
                                            return (
                                                <TableHead key={header.id}>
                                                    {header.isPlaceholder
                                                        ? null
                                                        : flexRender(
                                                              header.column
                                                                  .columnDef
                                                                  .header,
                                                              header.getContext()
                                                          )}
                                                </TableHead>
                                            );
                                        })}
                                    </TableRow>
                                ))}
                            </TableHeader>
                            <TableBody>
                                {table.getRowModel().rows?.length ? (
                                    table.getRowModel().rows.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            data-state={
                                                row.getIsSelected() &&
                                                "selected"
                                            }
                                        >
                                            {row
                                                .getVisibleCells()
                                                .map((cell) => (
                                                    <TableCell key={cell.id}>
                                                        {flexRender(
                                                            cell.column
                                                                .columnDef.cell,
                                                            cell.getContext()
                                                        )}
                                                    </TableCell>
                                                ))}
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan={columns.length}
                                            className="h-24 text-center"
                                        >
                                            {textNoResults}
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <div className="flex-1 text-sm text-muted-foreground">
                            {table.getFilteredSelectedRowModel().rows.length} of{" "}
                            {table.getFilteredRowModel().rows.length} row(s)
                            selected.
                        </div>
                        <div className="space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.previousPage()}
                                disabled={!table.getCanPreviousPage()}
                            >
                                Previous
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => table.nextPage()}
                                disabled={!table.getCanNextPage()}
                            >
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
