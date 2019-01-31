const shell = require('shelljs')

const command = ` \
  docker run -itd \
  -p 3000:3000    \
  -v /Users/JP24943/Desktop/for_docker/node11:/home/app/ \
  node:test npm start
`

shell.exec(command, (code, stdout, stderr) => {
  console.log(11)

  console.log({
    code, stdout, stderr
  })

  console.log(22)
})
