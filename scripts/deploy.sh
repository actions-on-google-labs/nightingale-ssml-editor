#!/bin/bash
#
# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# Build the client
yarn build

# Deploy function
firebase deploy --only functions

# Deploy client

PUBLISH_BRANCH="gh-pages"
PUBLISH_FOLDER="public"
# Check whether to create a new branch
git branch | grep ${PUBLISH_BRANCH}
if [ "$?" -gt 0 ]; then
    # Branch not found
    echo "Creating local branch ${PUBLISH_BRANCH}"
    git checkout -b ${PUBLISH_BRANCH}
else
    # Switch to branch
    git checkout ${PUBLISH_BRANCH}
fi

cd ${PUBLISH_FOLDER}

# Initialize git repository
git init
git remote add github git@github.com:actions-on-google-labs/nightingale-ssml-editor.git

git add .
git commit -m "Rebuild at $(date)" --no-verify

echo "Confirm a republish of this project with 'y'"

read confirm

if [ "$confirm" == "y" ]; then
    git push github gh-pages --force
    if [ "$?" -gt 0 ]; then
        echo "Error occurred, republishing failed"
        exit 1
    else
        echo "Republish complete"
    fi
else
    echo "Republish not confirmed, exiting..."
    exit 0
fi

# Switch back to master
echo "Done, switching back to master branch"
cd ../
git checkout master
git branch -D ${PUBLISH_BRANCH}
git reset master --hard