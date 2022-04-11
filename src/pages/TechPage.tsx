import { Header, Box, Content, Title, Text } from "./styles";
import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import Data from '../data.json'
import { useParams } from "react-router-dom";

export default function TechPage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    let {techname} = useParams()

    return (
        <ThemeProvider theme={theme}>
        <Header>
            <div className="left" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img src="../icons/return-dark.png" />
                <h2 style={{ marginLeft: '1rem' }}>Return</h2>
            </div>
            <div className="right">
                <Box />
            </div>
        </Header>

        <Content>
            <Title>{techname}</Title>
            <br />
            <Text>dwa</Text>
        </Content>
        </ThemeProvider>
    )
}