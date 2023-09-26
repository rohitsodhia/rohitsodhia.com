npm run build
ssh personal rm -rf /var/www/rohitsodhia.com/*
scp -r ./build/* personal:/var/www/rohitsodhia.com
