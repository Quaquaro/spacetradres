import GlobalStyles from '../GlobalStyles.js';
import Status from './Status.js';

export default {
  title: 'Components/Status',
  component: Status,
  decorators: [
    Story => (
      <div>
        <GlobalStyles />
        <Story />
      </div>
    ),
  ],
};
