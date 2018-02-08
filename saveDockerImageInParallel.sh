images=(2861c6e8f61f d3117424aaee bb00c21b4edf 7470b931fc2e)
mkdir -p ./caches
i=1
for image in ${images[@]}; do
  docker save $image -o ./caches/cache_$i.tar &
  i=`expr $i + 1`
done