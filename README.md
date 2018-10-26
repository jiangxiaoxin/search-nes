# search-nes

[the-road-to-learn-react](https://github.com/the-road-to-learn-react/the-road-to-learn-react)

- v1: without redux, handle state in App.jsx & db.js

## How to deploy

```bash
1. git add .
2. git commit -m "update project"
3. git push

4. git push heroku master // or " git push heroku v1:master "
5. check https://search-nes.herokuapp.com/
```
## important

千万别把运行需要的库装错地方，dependencies和devDependencies很重要。一开始axios装在dev里，gh-pages能发布成功，但是heroku不能，它找不到axios。


## Links
- [deployment introduction](https://dashboard.heroku.com/apps/search-nes/deploy/heroku-git)
- [heroku-cli documentation](https://devcenter.heroku.com/articles/heroku-cli)