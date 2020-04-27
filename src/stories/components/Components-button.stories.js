import Centered from '@storybook/addon-centered/vue'
import Button from './Button'

//import markdown docs 
import ButtonVue from '../docs/notes/button/ButtonVue.md'
import ButtonCSS from '../docs/notes/button/ButtonCSS.md'
import ButtonNotes from '../docs/notes/button/ButtonNotes.md'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [Centered],
  parameters: {
    notes: {'Notes': ButtonNotes, 'Vue': ButtonVue, 'CSS': ButtonCSS},
  }
};
export const Default = () => ({
  components: { Button },
  template: `<Button :label="'action'" :type="'config'" :action="() => {}"/>`
})
export const Connect = () => ({
  components: { Button },
  template: `<Button :label="'action'" :type="'connect'" :action="() => {}"/>`
})