import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { BoardListPage, HomePage } from '.'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={BoardListPage} />
      </Switch>
    </BrowserRouter>
  )
}
