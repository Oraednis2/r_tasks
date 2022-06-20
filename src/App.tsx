import { Anchor, Box, Heading, Nav, Text } from 'grommet'
import { useState } from 'react'
import { Home, Menu } from 'grommet-icons'



function App() {
  const [open, setOpen] = useState(false)


  return (
    <Box>
      <Nav direction='row' background='brand' pad="xsmall">
        <Anchor onClick={() => setOpen(true)} icon={<Menu />}></Anchor>
        <Text alignSelf='center' size='large' >Remote Tasks</Text>
      </Nav>
      <Heading level={3}>Hello</Heading>
    </Box>
  )
}

export default App
