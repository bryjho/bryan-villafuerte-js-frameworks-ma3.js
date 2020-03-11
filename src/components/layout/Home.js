import React from 'react';
import DivContainer from "../layout/DivContainer";
import Heading from "../layout/Heading";
import HomeContent from "../layout/HomeContent";

export function Home() {
    return (
        <DivContainer>
            <Heading title="Welcome to My First React App" />

            <HomeContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna ipsum. Etiam a tempus nisl. Praesent dolor purus, finibus bibendum accumsan in, consectetur et nibh. Duis dui leo, blandit eu dolor vitae, efficitur malesuada nulla. Pellentesque semper ipsum sed velit tincidunt, eget vulputate leo tincidunt. Suspendisse nec sodales risus, vel aliquet justo. Nulla nibh nunc, ultrices a leo rutrum, interdum maximus arcu. Quisque vestibulum nulla sit amet nisl vestibulum sollicitudin. Nullam mauris lacus, varius id egestas ac, dignissim in dolor. Sed semper magna turpis, eu gravida ipsum ultrices in.
            </HomeContent>

            <HomeContent>
                Cras viverra faucibus lorem in luctus. Morbi aliquam lacus non turpis rhoncus, vitae tempus risus maximus. Pellentesque consectetur odio eu nunc luctus elementum. In hendrerit interdum ante, volutpat laoreet dolor semper ac. Integer mauris felis, faucibus in elit id, euismod blandit diam. Donec mattis luctus ex, quis auctor enim pharetra a. Vivamus et accumsan ante. Etiam eget est vitae sem euismod laoreet ut vel tortor. Aenean bibendum massa eu odio vehicula viverra. Vestibulum in ipsum fringilla, convallis magna a, efficitur dolor. Sed commodo felis libero, et faucibus quam aliquam at. Curabitur imperdiet sapien id mi posuere sagittis. Cras placerat dignissim nisl nec consequat.
            </HomeContent>
        </DivContainer>
    );
}

export default Home;