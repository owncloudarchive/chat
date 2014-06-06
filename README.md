Chat
====

[![Build Status](https://travis-ci.org/owncloud/chat.svg?branch=master)](https://travis-ci.org/owncloud/chat)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/owncloud/chat/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/owncloud/chat/?branch=master)
[![Code Coverage](https://scrutinizer-ci.com/g/owncloud/chat/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/owncloud/chat/?branch=master)

Have chats in your ownCloud!

## Installation
1. Clone the repo to the apps directory of your owncloud installation
2. Activate the Contacts app in ownCloud
3. You'll have to uncomment line `59` in the file `lib/app.php` in the contacts. This will active the `LocalUsers` backend for the contacts app. The `LocalUsers` backend will be ported into core soon.
4. Activate the Chat app in owncloud
5. Load the Contacts app one time before the Chat app
6. Start Chatting!

## Live Example
A live example of the Chat app can be viewed on [OpenShift](http://chat-ledfan.rhcloud.com/).
There are 8 users on this instance of ownCloud. You can make a conversation with all 8 users in it.

Username | Password 
--- | ---
bar | bar
barfoo | barfoo
derp | derp
derpina | derpina
foo | foo
foobar | foobar
herp | herp
herpina | herpina

Note: the preview isn't always online or up to date.

## API
The API Documentation can be found in the [wiki](https://github.com/owncloud/chat/wiki/Api).

