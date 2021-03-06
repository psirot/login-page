#!/bin/sh

# В директории `out` находится вся статика, которую нужно задеплоить. Переходим в неё.
cd out

# Инициализируем внутри директории новый (временный) репозиторий. Это требуется для деплоя на GitHub Pages.
git init

# Создаем новую локальную ветку `gh-pages`.
git checkout -b gh-pages

# Добавляем все файлы и коммитим.
git add . && git commit -m 'Deploy'

# Подключаем удаленный репозиторий, где храниться код этого проекта и, в ветке `gh-pages`, статический сайт.
git remote add origin git@github.com:CSSSR/login-page.git

# GitHub делает публично доступным содержимое ветки `gh-pages`.
# Возможно она не пустая, поэтому отправляем в репозиторий перетерая всё то, что там сейчас содержится.
git push --set-upstream origin gh-pages --force

# Удаляем временный локальный репозиторий.
rm -rf .git
