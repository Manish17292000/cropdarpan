import React from 'react';

import Section from '../../../HOC/Section';
import Link from '../../UI/Link/Link';
import src from '../../images/cotton.png'
import sr1 from '../../images/sugar-cane.png'
import sr2 from '../../images/sunflower.png'
import sr3 from '../../images/wheat.png'

import { Grid, Card, Icon, Image , Button} from 'semantic-ui-react'

const home = () => {
  return (
    <Section id='home'>
      
    <Card.Group>
      <Card
        image={src}
        header='Cotton'
        description='Option1'
        style={{ width: '8px' }}

      />
      
    </Card.Group>
    <Card.Group>
      <Card
        image={sr1}
        header='Cotton'
        description='Option1'
      />
    </Card.Group>
    <Card.Group>
      <Card
        image={sr2}
        header='Cotton'
        description='Option1'
      />
    </Card.Group>
    <Card.Group>
      <Card
        image={sr3}
        header='Cotton'
        description='Option1'
      />
    </Card.Group>

    </Section>
  );
};

export default home;
