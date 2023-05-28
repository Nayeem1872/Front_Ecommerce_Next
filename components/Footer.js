import styled from "styled-components";
// import logo from "https://www.rpl.rootmpl.com/img/core-img/logo2.png"


const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
  margin-top: auto; /* Make the footer stick to the bottom */
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const FooterColumn = styled.div`
  flex: 1 0 100%;
  text-align: center;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    flex: 1 0 33.33%;
    margin-bottom: 0;
  }
`;

const FooterInfo = styled.div`
  /* text-align: left; */
`;

const FooterCompanyName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FooterAddress = styled.p`
  margin: 0;
`;

const FooterPhone = styled.p`
  margin: 0;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
   min-height: 40vh; /* Make the main container take up the full viewport height */
`;
const ContentWrapper = styled.div`
  flex: 1 0 auto; /* Allow the content to grow and fill the remaining vertical space */
`;
const AllRightsReserved = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;
  margin-top: 20px;
`;


export default function Footer (){
  const currentYear = new Date().getFullYear();
    return(
        <>
       <MainContainer>
      <ContentWrapper>
        {/* Your main content here */}
      </ContentWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterInfo>
              <FooterCompanyName>Root Bangladesh</FooterCompanyName>
              <FooterAddress>Plot#237,House#41,North Badda Satarkul Road, Dhaka-1214,Bangladesh</FooterAddress>
              <FooterPhone>+8801627172028(Hotline)</FooterPhone>
            </FooterInfo>
          </FooterColumn>
          <FooterColumn>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/categories">Categories</FooterLink>
          </FooterColumn>
          <FooterColumn>
          <AllRightsReserved>&copy; {currentYear} All rights reserved to Root Bangladesh</AllRightsReserved>
          </FooterColumn>
        </FooterContent>
      </FooterContainer>
    </MainContainer>

        </>
    )
}