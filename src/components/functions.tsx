import { Flex, Heading, IconButton, Text } from "@radix-ui/themes";
import { MdPayments } from "react-icons/md";
import { RiFilePaper2Fill } from "react-icons/ri";
import { FaLandmark } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { FaTag } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";

const Items = [
    {
        name: "Pagamentos",
        value: "payments",
        icon: <MdPayments size={20} />
    },
    {
        name: "Transações",
        value: "transactions",
        icon: <RiFilePaper2Fill size={17} />
    },
    {
        name: "Contas e patrimônio",
        value: "accountsAndAssets",
        icon: <FaLandmark size={17} />
    },
    {
        name: "Orçamento",
        value: "budget",
        icon: <IoWallet size={17} />
    },
    {
        name: "Tags",
        value: "tags",
        icon: <FaTag size={17} />
    },
    {
        name: "Indicadores",
        value: "indicators",
        icon: <FaChartSimple size={17} />
    }
]

const Functions = ({setSelectedTab}:any) => {
    return (
        <Flex justify="between">
            {Items.map(({name, value, icon}) => {
                return (
                    <Flex direction="column" align="center" gap="1" onClick={() => setSelectedTab(value)}>
                        <IconButton radius="full" size="3" variant="surface">
                            {icon}
                        </IconButton>
                        <Text style={{
                            fontSize: "9px",
                            fontWeight: "300",
                            marginTop: "4px",
                            width: "52px",
                            textAlign: "center",
                        }}>
                            {name}
                        </Text>
                    </Flex>
                )
            })}
        </Flex>
    )
}

export default Functions;