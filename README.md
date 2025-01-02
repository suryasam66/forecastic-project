# [[Forecastic]]

# Procedure to make this Application :

# To start the server -> { yarn run dev / npm run dev}

# Step 1 [Setup_The_Server]:

npm create vite@latest
[app_name]
npm i [ install node modules]  
npm install lottie-react  [install lotti files for animation]
npm install react-accessible-accordion [install accordion for tabs]
npm install react-icons  [install react icons]

cd [project-directory]


# Step 2 :

i. download the widgets for weatger from {Flaticon} and place it inside [assets]
ii. create Component folder inside [src]
iii. animations , widgets, font style use [lottie-files] & [react-icon] & [flatiocn] & [GoogleFonts]
iv. create one componenet for placing all the cmponents
v. we will use Router for pages path

# Step 3 :
{import lottifiles}
import { Lottie } from 'lottie-react';

{import accordion}
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

{import react icons}
import { FaBeer } from 'react-icons/fa'; 