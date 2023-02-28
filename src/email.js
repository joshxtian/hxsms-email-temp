import React from 'react';
import { readFileSync } from 'fs';

import {
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
  MjmlStyle,
  MjmlText,
  MjmlDivider,
  MjmlFont,
  MjmlWrapper
} from 'mjml-react';

const css = readFileSync('./assets/styles.css').toString();
export const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
        <MjmlFont name="Poppins" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"/>
        <MjmlStyle>{css}</MjmlStyle>
        <MjmlStyle>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        .email-template {
          width: 100%;
          background-color: #F0F0F0;
          
        }
        .email-template, .email-template > * {
          font-family: 'Poppins';
        }

        .email-template__inner {
          background-color: white;
          margin: 0 auto;
          border-radius: 30px;
          padding: 7px 40px;
          max-width: 807px;
          width: 100%;
        }

        `}</MjmlStyle>
        <MjmlStyle inline>{`
          .red-column {
            background-color: red;
          }
        `}</MjmlStyle>
      </MjmlHead>
      <MjmlBody cssClass="email-template">
        <MjmlWrapper cssClass="email-template__inner">
          <MjmlSection>
            <MjmlColumn>
              <MjmlImage cssClass="email-template__icon" src="https://www.hububble.co/hubfs/hxsms/hxsms-icon.png" height={70.6} width={229.4} align="left" />
              <MjmlDivider borderWidth={2} borderColor="lightgrey"/>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
            <MjmlText cssClass='email-template__title' align='center' fontSize={36} lineHeight={54} fontWeight={700} color="#063A5E">You are invited to HXSMS</MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlText align='center' color='#1F4E6E' fontSize={24} fontWeight={400} lineHeight={36}>HXSMS is a software that connects HubSpot and Every8D for your SMS service. Click the button below to move to the account set-up page and you can set your account.</MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection>
            <MjmlColumn>
              <MjmlButton padding="20px" 
              width={210}
              height={65}
              fontSize={20}
              color="#063A5E"
              backgroundColor="#FFEE55" href="https://www.wix.com/">
                Sign up
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};
