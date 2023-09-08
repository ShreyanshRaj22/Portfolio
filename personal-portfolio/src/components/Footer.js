import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export const Footer = () => {
    return (
      <MDBFooter bgColor='dark' className='text-center text-lg-start '>
      <section className='d-flex justify-center justify-content-lg-between p-4 border-bottom'>
          Get connected with me on social networks
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                Keep Visiting!
              </h6>
              <p>
                Yesterday lives only in our minds!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Skills</h6>
              <p>
                <a  className='text-reset'>
                  MongoDB
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Express
                </a>
              </p>
              <p>
                <a  className='text-reset'>
                  Node
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Resume
                </a>
              </p>
              <p>
                <a href='https://github.com/ShreyanshRaj22/FoodApp' className='text-reset'>
                  FoodApp
                </a>
              </p>
              <p>
                <a href='/' className='text-reset'>
                  Portfolio
                </a>
              </p>
              <p>
                <a href='https://github.com/ShreyanshRaj22/Alumni-Cell-New' className='text-reset'>
                  Alumni Web
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                NIT Delhi
              </p>
              <p>
                {/* <MDBIcon icon="envelope" className="me-3" /> */}
                211230051@nitdelhi.ac.in
              </p>
              <p>
                +919798530423
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright
      </div>
    </MDBFooter>
    );
}
