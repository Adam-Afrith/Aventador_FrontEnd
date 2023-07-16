// import React from "react";
// import {
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";

// const Footer = () => {
// return (
// 	<Box>
// 	<h3 style={{ color: "Blue",
// 				textAlign: "center",
// 				marginTop: "-50px" }}>
// 		AVENTADOR
// 	</h3>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			<FooterLink href="#">Testimonials</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Services</Heading>
// 			<FooterLink href="#">Writing</FooterLink>
// 			<FooterLink href="#">Internships</FooterLink>
// 			<FooterLink href="#">Coding</FooterLink>
// 			<FooterLink href="#">Teaching</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">Uttar Pradesh</FooterLink>
// 			<FooterLink href="#">Ahemdabad</FooterLink>
// 			<FooterLink href="#">Indore</FooterLink>
// 			<FooterLink href="#">Mumbai</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="#">
// 			<i className="fab fa-facebook-f">
// 				<span style={{ marginLeft: "10px" }}>
// 				Facebook
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-instagram">
// 				<span style={{ marginLeft: "10px" }}>
// 				Instagram
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-twitter">
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="#">
// 			<i className="fab fa-youtube">
// 				<span style={{ marginLeft: "10px" }}>
// 				Youtube
// 				</span>
// 			</i>
// 			</FooterLink>
// 		</Column>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;

import React from 'react'

const Footer = () => {
  return (
 <div className="footer-content" style={{ paddingTop: '100px' }}>
    <div className="card card-primary p-12 border-0 shadow-lg bg-transparent" >
    <div className="card-body" align='center'>
            <p>Follow Us On</p>
        <i className="fa-brands fa-facebook fa-lg"></i><span>&nbsp;&nbsp;</span>
        <i className="fa-brands fa-instagram fa-lg"></i><span>&nbsp;&nbsp;</span>
        <i className="fa-brands fa-twitter fa-lg"></i>
        
          <h6 align="center"><i className="fa-sharp fa-regular fa-copyright"></i> 2023 Aventador</h6>
        </div>
        
    </div>
</div>         
  );
}

export default Footer
