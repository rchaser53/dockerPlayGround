curl https://api.github.com/repos/rchaser53/rust_pack_man/commits?branch=wasm | jq '.[0]' | jq '.sha'

docker run -itd --name node-app -v $(pwd):/home/app/ rchaser53/node:8.9.4-alpine