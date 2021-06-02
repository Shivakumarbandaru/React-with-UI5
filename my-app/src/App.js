import {
  FlexBox,
  FlexBoxAlignItems,
  FlexBoxDirection,
  FlexBoxJustifyContent,
  Link,
  LinkDesign,
  ShellBar,
  ThemeProvider
} from '@ui5/webcomponents-react';

import { ComboBox, ComboBoxItem } from '@ui5/webcomponents-react';
import Combox from './CBox';
import React from 'react';
import './App.css';

function App() {
 

  return (
    <ThemeProvider>
      <ShellBar primaryTitle="ComboBox Task" />
      <div>
      <Combox></Combox>

      </div>
     

    </ThemeProvider>
  );
}

export default App;
