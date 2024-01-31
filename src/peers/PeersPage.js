import React from 'react'
import { connect } from 'redux-bundler-react'
import { Helmet } from 'react-helmet'
import { withTranslation } from 'react-i18next'
import ReactJoyride from 'react-joyride'
import withTour from '../components/tour/withTour.js'
import { peersTour } from '../lib/tours.js'
import { getJoyrideLocales } from '../helpers/i8n.js'

// Components
import Box from '../components/box/Box.js'
import WorldMap from './WorldMap/WorldMap.js'
import PeersTable from './PeersTable/PeersTable.js'

const PeersPage = ({ t, toursEnabled, handleJoyrideCallback }) => (
  <div data-id='PeersPage' className='overflow-hidden'>
    <Helmet>
      <title>{t('title')} | IPFS</title>
    </Helmet>

    {/* Removed Add Peer button */}

    <Box className='pt3 ph3 pb4'>
      <WorldMap className='joyride-peers-map' />
      <PeersTable className='joyride-peers-table' />
    </Box>

    <ReactJoyride
      run={toursEnabled}
      steps={peersTour.getSteps({ t })}
      styles={peersTour.styles}
      callback={handleJoyrideCallback}
      continuous
      scrollToFirstStep
      locale={getJoyrideLocales(t)}
      showProgress />
  </div>
)

export default connect(
  'selectToursEnabled',
  'selectIsCliTutorModeEnabled',
  withTour(withTranslation('peers')(PeersPage))
)
