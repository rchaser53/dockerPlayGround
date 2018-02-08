images=(2861c6e8f61f d3117424aaee bb00c21b4edf 7470b931fc2e)
for image in ${images[@]}; do
  docker rmi $image
done