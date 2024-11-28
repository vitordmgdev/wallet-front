import { Heading } from "@radix-ui/themes";
import styled from "styled-components"

const Sidebar = () => {
    return (
        <Styled className="bg-zinc-900 border-r border-zinc-800 p-4">
            <Heading size="4">
                Wallet
            </Heading>
        </Styled>
    )
}

const Styled = styled.aside`
    height: 100%;
    width: 240px;
`

export default Sidebar;