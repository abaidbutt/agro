import React from 'react';
import { Dimensions, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { theme } from '../../theme';

const { colors, sizes } = theme;

const Chart = ({ expanded, seed, paid, sprayer, fertilizer, oil, rented }) => {
  const data = [
    { x: 'Oil', y: oil },
    { x: 'Helpful', y: paid },
    { x: 'Seeds', y: seed },
    { x: 'Protection', y: sprayer },
    { x: 'Feeding', y: fertilizer },
    { x: 'Lease', y: rented }
  ].filter(item => item.y > 0);
  return (
    <View
      style={{
        height: expanded && data.length ? null : 0,
        overflow: 'hidden',
        alignItems: 'center'
      }}
    >
      <VictoryPie
        data={data}
        colorScale={[
          colors.primary,
          colors.secondary,
          colors.tertiary,
          '#6c5ce7',
          'cyan',
          'tomato'
        ]}
        padding={{ top: 30, bottom: 35 }}
        cornerRadius={sizes.radius / 3}
        padAngle={3}
        height={Dimensions.get('window').width / 2}
      />
    </View>
  );
};

export default Chart;
