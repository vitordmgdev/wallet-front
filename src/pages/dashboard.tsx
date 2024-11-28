import {
  Flex,
  Heading
} from "@radix-ui/themes";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import styled from "styled-components";
import Wallet from "./wallet";
import Summary from "./summary";
import Transactions from "./transactions";
import { useEffect, useState } from "react";
import Payments from "./payments";

const DashboardPage = () => {
  const [selectedTab, setSelectedTab] = useState<string>("wallet")

  const Items = [
    {
      name: "Carteira",
      value: "wallet",
      onTab: true,
      element: <Wallet setSelectedTab={setSelectedTab} />
    },
    {
      name: "Configurações",
      value: "configs",
      onTab: true,
      element: <Wallet setSelectedTab={setSelectedTab} />
    },
    {
      name: "Transações",
      value: "transactions",
      onTab: false,
      element: <Transactions />
    },
    {
      name: "Pagamentos",
      value: "payments",
      onTab: false,
      element: <Payments />
    }
  ]

  return (
    <Dashboard>
      <Flex direction="column" gap="4" >
        <Tabs value={selectedTab} className="w-full" onValueChange={(e) => setSelectedTab(e)}>
          <Flex direction="column" gap="2">
            <TabsList className="w-fit" style={{backgroundColor: "transparent", padding: "0"}}>
              {Items.map(({name, value, onTab}) => {
                if(onTab){
                  return (
                    <TabsTrigger value={value}>
                      {name}
                    </TabsTrigger>
                )}})}
            </TabsList>
            {Items.map(({value, element}) => {
              return (
                <TabsContent value={value}>
                  {element}
                </TabsContent>
              )})}
          </Flex>
        </Tabs>
      </Flex>
    </Dashboard>
  );
};

const Dashboard = styled.section`
  max-width: 1080px;
  width: 100%;
`;

const Effect = styled.div`
  position: absolute;
  width: 100px;
  z-index: -1;
  height: 100px;
  filter: blur(75px);
`;

export default DashboardPage;
