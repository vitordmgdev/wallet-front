import { Button, Flex, Heading } from "@radix-ui/themes";
import { LiaBarsSolid } from "react-icons/lia";
import styled from "styled-components";
import { SidebarTrigger } from "./ui/sidebar";

const Component = () => {
    return (
        <Styled className="bg-zinc-900 border-b dark:border-zinc-700">
            <Container>
                <Flex gap="2" align="center">
                    <Heading size="4" weight="regular">
                        Wallet
                    </Heading>
                </Flex>
                <div className="block sm:hidden">
                    <LiaBarsSolid color="#fff" size={24} />
                </div>
                <div className="hidden sm:block">
                    <Flex gap="2">
                        <Button variant="outline" color="gray">Cadastrar-se</Button>
                        <Button variant="outline" color="gray">Entrar</Button>
                    </Flex>
                </div>
            </Container>
        </Styled>
    )
}

const Styled = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 54px;
`

const Container = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    width: calc(100vw - 32px);
    max-width: 1080px;
`

const Header = {
    styled: Styled,
    component: Component
}

export default Header;