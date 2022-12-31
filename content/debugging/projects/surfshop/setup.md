---
title: "Editor Setup"
weight: 15
---

## Setup

1. Run the following command in your terminal. It will automatically create a directory for you, create a file in that directory named **undefined.js**, and take you to that directory.
    {{< highlight shell "linenos=false" >}}
    /bin/bash -c "$(curl -fsSL {{< siteurl >}}debugging/scripts/undefined.sh)"
    {{< / highlight >}}
2. Navigate to the directory it created with the following command.
    {{< highlight shell "linenos=false" >}}
    cd ~/workspace/surf-shop
    {{< / highlight >}}

1. Create a **launch.json** file in your debug panel, and replace the _program_ key with the following code.
    {{< highlight json "linenos=false" >}}
    "program": "${workspaceFolder}/${relativeFile}"
    {{< / highlight >}}
