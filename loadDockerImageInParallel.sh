for image in $(ls caches); do
  docker load -i ./caches/$image &
done