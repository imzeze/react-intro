import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { boardListPage } from '.'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/list" component={boardListPage} />
      </Switch>
    </BrowserRouter>
  )
}
