// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Link,
  Code,
  Image,
  CodePane,
  S
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logux: require("../assets/logux.png"),
  time: require("../assets/time.png"),
  snapshot: require("../assets/snapshot.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

function LeftText({ children }) {
  return <Text textAlign="left" padding="20px">{children}</Text>
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React London 2017
          </Heading>
        </Slide>

        <Slide>
          <Heading size={1}>Prettier</Heading>
        </Slide>

        <Slide maxHeight={750}>
          <LeftText>A code formatter, inpired by <Link href="https://blog.golang.org/go-fmt-your-code">Gofmt</Link>.</LeftText>
          <LeftText>Works differently from most linters. Parses code into an Abstract Syntax Tree (AST), then prints out to disk using Wadler's algorithm</LeftText>
          <LeftText>Forces code style to be the same, because every character is printed by Prettier</LeftText>
          <LeftText>Few options at the moment (e.g. forces semi-colons), but more coming in the future</LeftText>
          <Text padding="20px"><Link href="https://prettier.github.io/prettier/">https://prettier.github.io/prettier/</Link></Text>
        </Slide>

        <Slide>
          <Heading size={5}>Only for formatting, no linting</Heading>

          <Text padding="20px"><Link href="https://github.com/prettier/prettier-eslint">prettier-eslint</Link></Text>
          <LeftText>Passes code through prettier, then through eslint with the <Code>--fix</Code> flag.</LeftText>
          <LeftText>This means we can customise some things (e.g. removing semi-colons!), and we get the benefit of linting</LeftText>
        </Slide>

        <Slide>
          <Heading size={1}>Logux</Heading>
        </Slide>

        <Slide>
          <LeftText>Client/server data sync layer based on Conflict Free Replicated Data Types (CRDT)</LeftText>
          <LeftText>Combines Redux and <Link href="http://swarmjs.github.io/">Swarm.js</Link></LeftText>
          <LeftText>Log of Redux actions which is replicated to the server over websockets, which can then be projected into data (Event Sourcing)</LeftText>
          <LeftText>Because the client maintains an independent log of events, it can be considered "Offline First"</LeftText>
        </Slide>

        <Slide>
          <Image src={images.logux} height="500" />
        </Slide>

        <Slide>
          <Heading size={5}>CRDT</Heading>
          <LeftText>Comes from distributed systems, e.g. <Link href="https://en.wikipedia.org/wiki/Riak">Riak</Link></LeftText>
          <LeftText>Similar to Operational Transform, which is used by the History Service</LeftText>
          <LeftText>Data types are defined in such a way that they cannot conflict</LeftText>
          <LeftText>Uses "Lamport timestamps" to keep ordering of events - quite complicated in client-side JS, so time is sent from central server</LeftText>
        </Slide>

        <Slide>
          <Image src={images.time} height="600" />
        </Slide>

        <Slide>
          <Heading size={1}>Snapshot testing</Heading>
        </Slide>

        <Slide maxHeight={750}>
          <LeftText>New form of testing, available in Jest and AVA tools</LeftText>
          <LeftText>Print the output of the code under test to a file, commit it, then monitor subsequent runs to see if it matches</LeftText>
          <LeftText>If the change is intended, then a new snapshot file is generated and committed</LeftText>
          <LeftText>Easier to write than normal unit tests and potentially can get greater coverage</LeftText>
          <LeftText>Can't really test behaviour or state changes</LeftText>
        </Slide>

        <Slide>
          <CodePane lang="javascript" source={require('raw-loader!../assets/snapshot.example')} />
        </Slide>

        <Slide>
          <Image src={images.snapshot} height={600} />
        </Slide>

        <Slide>
          <Heading size={1}>Redux Offline</Heading>
        </Slide>

        <Slide maxHeight={750}>
          <LeftText>Useful library for persisting Redux actions on disk, then syncing when user is (re)connected</LeftText>
          <LeftText>Adds a <Code>meta.offline</Code> object to Redux actions configuring how they should be sent to the server</LeftText>
          <LeftText>Different to Logux - specifies no format for sending data to server</LeftText>
          <LeftText>It also does <S type="bold">not</S> provide a complete toolbox for offline support - requires <Code>ServiceWorker</Code> configuration</LeftText>
        </Slide>

        <Slide>
          <Heading size={1}>Styled Components</Heading>
        </Slide>

        <Slide>
          <LeftText>New(ish) CSS-in-JS library aimed specifically at React</LeftText>
          <LeftText>Seems like one of the best implementations, - can handle media queries & animations</LeftText>
          <LeftText>Uses ES6 template literals to write "real" CSS</LeftText>
          <LeftText>Although I'm still not convinced that in the long term just using CSS/Sass & BEM is a better solution</LeftText>
        </Slide>

        <Slide>
          <CodePane lang="javascript" source={require('raw-loader!../assets/styled.example')} />
        </Slide>

        <Slide>
          <Heading size={1}>The rest</Heading>
          <Heading size={5}>Interesting but not super relevant</Heading>
        </Slide>

        <Slide>
          <LeftText><Link href="https://zeit.co/blog/next">Next.js</Link> - Framework for server-side rendered React apps</LeftText>
          <LeftText><Link href="https://facebook.github.io/reason">ReasonML</Link> - new syntax & toolchain layer for OCaml that compiles to JS & good React bindings</LeftText>
          <LeftText><Link href="https://github.com/iamdustan/tiny-react-renderer">Tiny Fiber renderer</Link> - demo of how to write a custom React "renderer" with the new React Fiber</LeftText>
        </Slide>

        <Slide>
          <Heading size={4}><Link href="https://www.youtube.com/playlist?list=PLb0IAmt7-GS3fZ46IGFirdqKTIxlws7e0">Conference YouTube Playlist</Link></Heading>
        </Slide>

      </Deck>
    );
  }
}
