// Router-related import
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Styled components for App.js
import { GlobalStyle, Wrapper, HeadingWrapper, HeadingPrimary } from './style';
import { HeaderWrapper, MainWrapper, FooterWrapper, FooterText } from './style';
// App Component
import { Nav, Header, Main, Footer } from './components/layout';
import ProfileGenerator from './components/sections/ProfileGenerator';
import Home from './components/pages/Home';
import Sidebar from './components/sections/Sidebar';
import NotFound from 'components/pages/NotFound';
// From react module
import { Fragment, useState} from 'react';


function App() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Wrapper>

          <Nav>
            <Sidebar open={open} setOpen={setOpen} />
          </Nav>

          <Header>
            <HeaderWrapper>
              <HeadingWrapper open={open}>
                <HeadingPrimary>Profile Card Generator</HeadingPrimary>
              </HeadingWrapper>
            </HeaderWrapper>
          </Header>

          <Main>
            <MainWrapper>
              <Routes>
                <Route exact path="/" element={<Navigate replace to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/generate" element={<ProfileGenerator />} />
                <Route path="/error" element={<NotFound />} />
                <Route path="/*" element={<Navigate replace to ="/error" />} />
              </Routes>
            </MainWrapper>
          </Main>

          <Footer>
            <FooterWrapper>
              <FooterText>
                Created by Dafiq Arba
              </FooterText>
              <FooterText>Powered by React, 2021</FooterText>
            </FooterWrapper>
          </Footer>

        </Wrapper>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
