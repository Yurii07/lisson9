# PM2 Commands

> Запуск приложения

pm2 start app.js --name myApp
pm2 start npm -- start 
pm2 start prod.config.json

> Список запущеных приложений
pm2 list

> Включить режим мониторинша
pm2 monit

> Остановить приложение
pm2 stop all
pm2 stop appName\id

> Перезапустить приложение
pm2 restart all
pm2 restart appName\id

> Удалить приложение
pm2 delete all
pm2 delete appName\id

> Отключить pm2
pm2 kill

> Help
pm2 --help
