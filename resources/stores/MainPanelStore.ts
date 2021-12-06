import { Stores } from '.'
import { makeObservable, observable, action } from 'mobx'

export class MainPanelStore {
  $root: Stores

  visible = true

  setVisible(visible: boolean) {
    this.visible = visible
  }

  constructor(root: Stores) {
    this.$root = root

    makeObservable(this, {
      visible: observable,
      setVisible: action,
    })
  }
}