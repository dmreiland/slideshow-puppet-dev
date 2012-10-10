{
  "events": [
    {
      "act": "OPEN", 
      "size": [
        65, 
        22 
      ], 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.4310150146484375
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[?1034h\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigi\u001b[Kn\rn\u001b(B\u001b[m \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop * ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git diff", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0050449371337890625
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1mdiff --git a/README.md b/README.md\u001b[m\r\n\u001b[1mindex 933967e..7b2efde 100644\u001b[m\r\n\u001b[1m--- a/README.md\u001b[m\r\n\u001b[1m+++ b/README.md\u001b[m\r\n\u001b[36m@@ -6,12 +6,16 @@\u001b[m\r\n     # The order is important here!\u001b[m\r\n \u001b[m\r\n \u001b[m\r\n\u001b[31m-    apache::vhost {'my_virtual_host':\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m    apache::vhost {'vhost.example.com_80':\u001b[m\r\n \u001b[m\r\n     }\u001b[m\r\n \u001b[m\r\n # Release Notes:\u001b[m\r\n \u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m## 0.13.0\u001b[m\r\n\u001b[32m+\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32mAdded some release notes here.\u001b[m\r\n\u001b[32m+\u001b[m\r\n ## Upgrade to 0.9\u001b[m\r\n \u001b[m\r\n If you are upgrading from a version earlier than 0.9, you no longer have to\u001b[m\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.08105206489562988
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop * ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git add -p README.md", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.14923691749572754
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1mdiff --git a/README.md b/README.md\u001b[m\r\n\u001b[1mindex 933967e..7b2efde 100644\u001b[m\r\n\u001b[1m--- a/README.md\u001b[m\r\n\u001b[1m+++ b/README.md\u001b[m\r\n\u001b[36m@@ -6,12 +6,16 @@\u001b[m\r\n     # The order is important here!\u001b[m\r\n \u001b[m\r\n \u001b[m\r\n\u001b[31m-    apache::vhost {'my_virtual_host':\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m    apache::vhost {'vhost.example.com_80':\u001b[m\r\n \u001b[m\r\n     }\u001b[m\r\n \u001b[m\r\n # Release Notes:\u001b[m\r\n \u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m## 0.13.0\u001b[m\r\n\u001b[32m+\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32mAdded some release notes here.\u001b[m\r\n\u001b[32m+\u001b[m\r\n ## Upgrade to 0.9\u001b[m\r\n \u001b[m\r\n If you are upgrading from a version earlier than 0.9, you no longer have to\u001b[m\r\nStage this hunk [y,n,q,a,d,/,s,e,?]? ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "s", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0007009506225585938
    }, 
    {
      "act": "WRITE", 
      "data": "Split into 2 hunks.\r\n\u001b[36m@@ -6,9 +6,9 @@\u001b[m\r\n     # The order is important here!\u001b[m\r\n \u001b[m\r\n \u001b[m\r\n\u001b[31m-    apache::vhost {'my_virtual_host':\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m    apache::vhost {'vhost.example.com_80':\u001b[m\r\n \u001b[m\r\n     }\u001b[m\r\n \u001b[m\r\n # Release Notes:\u001b[m\r\n \u001b[m\r\nStage this hunk [y,n,q,a,d,/,j,J,g,e,?]? ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "y", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0003631114959716797
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[36m@@ -10,8 +10,12 @@\u001b[m\r\n \u001b[m\r\n     }\u001b[m\r\n \u001b[m\r\n # Release Notes:\u001b[m\r\n \u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m## 0.13.0\u001b[m\r\n\u001b[32m+\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32mAdded some release notes here.\u001b[m\r\n\u001b[32m+\u001b[m\r\n ## Upgrade to 0.9\u001b[m\r\n \u001b[m\r\n If you are upgrading from a version earlier than 0.9, you no longer have to\u001b[m\r\nStage this hunk [y,n,q,a,d,/,K,g,e,?]? ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.008435964584350586
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.10309505462646484
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop *+ ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git diff --cached", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0048139095306396484
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1mdiff --git a/README.md b/README.md\u001b[m\r\n\u001b[1mindex 933967e..b303e01 100644\u001b[m\r\n\u001b[1m--- a/README.md\u001b[m\r\n\u001b[1m+++ b/README.md\u001b[m\r\n\u001b[36m@@ -6,7 +6,7 @@\u001b[m\r\n     # The order is important here!\u001b[m\r\n \u001b[m\r\n \u001b[m\r\n\u001b[31m-    apache::vhost {'my_virtual_host':\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m    apache::vhost {'vhost.example.com_80':\u001b[m\r\n \u001b[m\r\n     }\u001b[m\r\n \u001b[m\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.098876953125
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop *+ ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git commit -m 'Updated the example in the readme a bit'", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.007309913635253906
    }, 
    {
      "act": "WRITE", 
      "data": "[develop 587a5c9] Updated the example in the readme a bit\r\n 1 files changed, 1 insertions(+), 1 deletions(-)\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0865330696105957
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m+1 \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop * ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git diff", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00513911247253418
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1mdiff --git a/README.md b/README.md\u001b[m", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0001990795135498047
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.00012922286987304688
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[1mindex b303e01..7b2efde 100644\u001b[m\r\n\u001b[1m--- a/README.md\u001b[m\r\n\u001b[1m+++ b/README.md\u001b[m\r\n\u001b[36m@@ -12,6 +12,10 @@\u001b[m\r\n \u001b[m\r\n # Release Notes:\u001b[m\r\n \u001b[m\r\n\u001b[32m+\u001b[m\u001b[32m## 0.13.0\u001b[m\r\n\u001b[32m+\u001b[m\r\n\u001b[32m+\u001b[m\u001b[32mAdded some release notes here.\u001b[m\r\n\u001b[32m+\u001b[m\r\n ## Upgrade to 0.9\u001b[m\r\n \u001b[m\r\n If you are upgrading from a version earlier than 0.9, you no longer have to\u001b[m\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.08866596221923828
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m+1 \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop * ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git add README.md", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.10508489608764648
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m+1 \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop + ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git commit -m 'Added some releasenotes for new release'", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0060732364654541016
    }, 
    {
      "act": "WRITE", 
      "data": "[develop 20a6fb4] Added some release notes for new release\r\n 1 files changed, 4 insertions(+), 0 deletions(-)\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.10106205940246582
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m+2 \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "ECHO", 
      "data": "git status", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.012245893478393555
    }, 
    {
      "act": "WRITE", 
      "data": "# On branch develop\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 8.296966552734375e-05
    }, 
    {
      "act": "WRITE", 
      "data": "# Your branch is ahead of 'origin/develop' by 2 commits.\r\n#\r\nnothing to commit (working directory clean)\r\n", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.09977293014526367
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[32m\u001b[1mjan@membrane\u001b[34m\u001b[1m ~/vagrant/puppet/modules/upstream/apache\u001b(B\u001b[m\u001b(B\u001b[m \u001b[36m\u001b[1m[git: \u001b(B\u001b[m\u001b[32morigin\rn\u001b(B\u001b[m+2 \u001b[36m\u001b[1m|\u001b(B\u001b[m \u001b[01;36mdevelop ]\u001b[00m \u001b[01;34m$\u001b[00m ", 
      "term": "0086c6bcb96a4a8c8bcd00d1534844c7"
    }
  ]
}
