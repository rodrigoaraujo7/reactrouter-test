import { useState, useEffect } from "react";

import { Header, Box, Content, Title, Text } from "./styles";
import usePersistedState from '../utils/usePersistedState'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/themes/light'
import dark from '../styles/themes/dark'

import returnDark from '../icons/return-dark.png'

import data from '../data.json'
import { useNavigate, useParams } from "react-router-dom";

type Icontent = {
    id: Number,
    title: string,
    image: string,
    content: string
}

export default function TechPage() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

    let navigate = useNavigate()
    let {techname} = useParams()

    const [content, setContent] = useState({})

    useEffect(() => {
        const aux = data.filter(item => {
            if(item.title === techname) {
                return item
            }
        })
        setContent(aux)
        console.log(aux)
    },[])

    console.log(content)

    return (
        <ThemeProvider theme={theme}>
        <Header>
            <div className="left" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer'
            }} onClick={() => {
                navigate('/')
            }}>
                <img src={returnDark} style={{
                    width: '2.5rem'
                }} />
                <h2 style={{ marginLeft: '1rem' }}>Return</h2>
            </div>
            <div className="right">
                <Box />
            </div>
        </Header>

        <Content>
            <Title>{content[0]?.title}</Title>
            <br />
            <Text>{content[0]?.content}</Text>
        </Content>
        </ThemeProvider>
    )
}