"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

function FooterSection(){
    return (
        
        <Footer container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div>
                    <FooterBrand
                    href="#"
                    src="src\assets\logo.png"
                    alt="Green Home Logo"
                    name="Green Home"
                    />
                </div>
                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <FooterTitle title="about" />
                    <FooterLinkGroup col>
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Product</FooterLink>
                    </FooterLinkGroup>
                    </div>
                    <div>
                    <FooterTitle title="Follow us" />
                    <FooterLinkGroup col>
                        <FooterLink href="#">Facebook</FooterLink>
                        <FooterLink href="#">Instagram</FooterLink>
                    </FooterLinkGroup>
                    </div>
                    <div>
                    <FooterTitle title="Legal" />
                    <FooterLinkGroup col>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Terms &amp; Conditions</FooterLink>
                    </FooterLinkGroup>
                    </div>
                </div>
                </div>
                <FooterDivider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                <FooterCopyright href="#" by="Green Home™" year={2026} />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <FooterIcon href="#" icon={BsFacebook} />
                    <FooterIcon href="#" icon={BsInstagram} />
                    <FooterIcon href="#" icon={BsTwitter} />
                    <FooterIcon href="#" icon={BsGithub} />
                    <FooterIcon href="#" icon={BsDribbble} />
                </div>
                </div>
            </div>
        </Footer>

    );
}

export default FooterSection;