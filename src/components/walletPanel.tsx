import { Card, Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { Badge } from "./ui/badge";

const WalletPanel = () => {
  const [ currency, setCurrency ] = useState("R$");

  return (
    <Card className="w-full" size="2">
      <Flex direction="column" gap="2">
        <Flex direction="row" justify="between" align="center">
          <Heading wrap="nowrap" weight="bold" size="7" style={{fontFamily: "Inter, sans-serif"}}>
            {currency} 0,00
          </Heading>
          <IconButton variant="surface" color="gray" style={{cursor: "pointer"}}>
            <IoIosArrowForward size={18}/>
          </IconButton>
        </Flex>
        <Flex>
          <Badge className="rounded-full select-none" 
          onClick={() => setCurrency("R$")} style={{
          background: `${currency == "R$" ? "" : "transparent"}`,
          color: `${currency == "R$"? "black" : "white"}`,
          cursor: "pointer", border: "none"}}>
            R$
          </Badge>
          <Badge className="rounded-full select-none" 
          onClick={() => setCurrency("US$")} style={{
          background: `${currency == "US$" ? "" : "transparent"}`,
          color: `${currency == "R$"? "white" : "black"}`,
          cursor: "pointer", border: "none"}}>
            US$
          </Badge>
        </Flex>
      </Flex>
    </Card>
  );
};

export default WalletPanel;
