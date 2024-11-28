import { Card, Grid, Heading } from "@radix-ui/themes"

const Transactions = () => {
    return (
        <Grid columns={{ initial: "1", xs: "2", md: "3" }} gap="2">
            <Card>
                <Heading size="4" weight="medium">
                    Adicionar transação
                </Heading>
                
            </Card>
            <Card>
                
            </Card>
            <Card>
                
            </Card>
        </Grid>
    )
}

export default Transactions;