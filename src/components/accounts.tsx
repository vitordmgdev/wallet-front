import { Card, Flex, Text, TextField } from "@radix-ui/themes";
import { AiOutlineBank } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { ScrollArea } from "@radix-ui/themes";

const Accounts = () => {
  interface Data {
    ispb: string;
    name: string;
    code: number;
    fullName: string;
  }

  const [accountsArray, setAccountsArray] = useState<Data[]>([]);
  const [searchAccount, setSearchAccount] = useState<string>("");
  const [textFieldFocus, setTextFieldFocus] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://brasilapi.com.br/api/banks/v1");
      setAccountsArray(response.data);
    }
    fetchData();
  }, []);
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Flex direction="column" gap="2">
          <TextField.Root
            size="3"
            onChange={(e) => setSearchAccount(e.target.value)}
            placeholder="Adicionar conta"
            onFocus={() => setTextFieldFocus(true)}
            onBlur={() => setTextFieldFocus(false)}
          >
            <TextField.Slot>
              <AiOutlineBank />
            </TextField.Slot>
          </TextField.Root>
          
        </Flex>
      </Flex>
    </Card>
  );
};

interface IAccount {
  name: string;
}

const Account = ({ name }: IAccount) => {
  return (
    <li
      className="flex justify-between items-center w-full p-3 hover:bg-zinc-800 bg-zinc-900 
        rounded-md cursor-pointer"
    >
      <Text size="2">{name}</Text>
      <Flex align="center" gap="2">
        <IoIosArrowForward size={14} />
      </Flex>
    </li>
  );
};

export default Accounts;
