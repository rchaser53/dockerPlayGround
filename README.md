curl https://api.github.com/repos/rchaser53/rust_pack_man/commits?branch=wasm | jq '.[0]' | jq '.sha'