import { Card, Flex, Heading, ScrollArea } from "@radix-ui/themes"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "./ui/table";
import { Badge } from "./ui/badge";
import { IoMdOpen } from "react-icons/io";

const TransactionsData = [
  {
    name: "Compras",
    amount: 250.00,
    date: "01/01/2025"
  },
  {
    name: "Compras",
    amount: 250.00,
    date: "01/01/2025"
  },
  {
    name: "Compras",
    amount: 250.00,
    date: "01/01/2025"
  },
  {
    name: "Compras",
    amount: 250.00,
    date: "01/01/2025"
  }
]
const Transactions = () => {
    return (
      <Card size="2" className="">
        <ScrollArea>
            <Table>
              <TableHeader>
                <TableRow className="dark:bg-zinc-800 border-none">
                  <TableHead>Nome</TableHead>
                  <TableHead>Valor</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  TransactionsData.map(({ name, amount, date }, index) => {
                    return (
                      <TableRow className="border-b dark:border-zinc-700">
                        <TableCell className="line-clamp-1" style={{lineHeight: "30px"}}>
                          {name}
                        </TableCell>
                        <TableCell className="text-nowrap">
                          R$ { amount.toFixed(2).replace(".",",") }
                        </TableCell>
                        <TableCell>
                          {date}
                        </TableCell>
                      </TableRow>
                    )
                  })
                }
              </TableBody>
            </Table>
          </ScrollArea>
        </Card>
    )
}

export default Transactions;