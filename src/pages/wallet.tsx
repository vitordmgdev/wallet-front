import { Grid, Flex, Heading, Card, Text, IconButton } from "@radix-ui/themes"
import WalletPanel from "../components/walletPanel"
import Functions from "../components/functions";

const Wallet = ({setSelectedTab}:any) => {
    return (
      <Flex direction="column" gap="4">
        <Grid columns={{ initial: "1", xs: "2", md: "3" }} gap="2">
          <Flex direction="column" gap="2">
            <Functions setSelectedTab={setSelectedTab} />
            <WalletPanel />
            <Card size="2">
              <Flex justify="between" gap="4">
                <Flex direction="column">
                  <Text size="2">Receitas</Text>
                  <Heading style={{fontFamily: "Inter"}} size="6">
                    R$ 0,00
                  </Heading>
                </Flex>
                <Flex direction="column">
                  <Text size="2">Despesas</Text>
                  <Heading style={{fontFamily: "Inter"}} size="6">
                    R$ 0,00
                  </Heading>
                </Flex>
              </Flex>
            </Card>
          </Flex>
          <Flex direction="column" gap="3">
          </Flex>
          <Flex direction="column" gap="3">
          </Flex>
        </Grid>
      </Flex>
    )
}

export default Wallet;