{
  "events": [
    {
      "act": "OPEN", 
      "size": [
        65, 
        18
      ], 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.010646820068359375
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[?1034h\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "mkdir rpms", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.002137899398803711
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "mv rsync-3.0.6-9.el6.x86_64.rpm rpms", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0021820068359375
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "ln -sf rpms/rsync-3.0.6-9.el6.x86_64.rpm 00_rsync.rpm", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0016269683837890625
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "cd rpms", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n\u001b]0;demo@membrane:~/vagrant/packages/rpms\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages/rpms $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "wget http://pulp01.csn.be01.uni/pulp/repos/dolly/up/upcust//rubygem-hiera-1.1.0-1.noarch.rpm", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.005335807800292969
    }, 
    {
      "act": "WRITE", 
      "data": "--2012-10-10 21:50:08--  http://pulp01.csn.be01.uni/pulp/repos/dolly/up/upcust//rubygem-hiera-1.1.0-1.noarch.rpm\r\nResolving pulp01.csn.be01.uni (pulp01.csn.be01.uni)... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.01777195930480957
    }, 
    {
      "act": "WRITE", 
      "data": "10.1.16.8\r\nConnecting to pulp01.csn.be01.uni (pulp01.csn.be01.uni)|10.1.16.8|:80... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.011909008026123047
    }, 
    {
      "act": "WRITE", 
      "data": "connected.\r\nHTTP request sent, awaiting response... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.04151105880737305
    }, 
    {
      "act": "WRITE", 
      "data": "200 OK\r\nLength: 44075 (43K) [application/x-rpm]\r\nSaving to: `rubygem-hiera-1.1.0-1.noarch.rpm'\r\n\r\n\r 0% [                                        ] 0           --.-K/s              ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.03981804847717285
    }, 
    {
      "act": "WRITE", 
      "data": "\r100%[=======================================>] 44,075      --.-K/s   in 0.05s   \r\n\r\n2012-10-10 21:50:09 (928 KB/s) - `rubygem-hiera-1.1.0-1.noarch.rpm' saved [44075/44075]\r\n\r\n\u001b]0;demo@membrane:~/vagrant/packages/rpms\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages/rpms $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "wget http://pulp01.csn.be01.uni/pulp/repos/dolly/up/upcust//rubygem-hiera-puppet-1.0.0-1.noarch.rpm", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0020198822021484375
    }, 
    {
      "act": "WRITE", 
      "data": "--2012-10-10 21:50:20--  http://pulp01.csn.be01.uni/pulp/repos/dolly/up/upcust//rubygem-hiera-puppet-1.0.0-1.noarch.rpm\r\nResolving pulp01.csn.be01.uni (pulp01.csn.be01.uni)... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.013361930847167969
    }, 
    {
      "act": "WRITE", 
      "data": "10.1.16.8\r\nConnecting to pulp01.csn.be01.uni (pulp01.csn.be01.uni)|10.1.16.8|:80... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.011956930160522461
    }, 
    {
      "act": "WRITE", 
      "data": "connected.\r\nHTTP request sent, awaiting response... ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.06817483901977539
    }, 
    {
      "act": "WRITE", 
      "data": "200 OK\r\nLength: 18553 (18K) [application/x-rpm]\r\nSaving to: `rubygem-hiera-puppet-1.0.0-1.noarch.rpm'\r\n\r\n\r 0% [                                        ] 0           --.-K/s              ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.008365154266357422
    }, 
    {
      "act": "WRITE", 
      "data": "\r100%[=======================================>] 18,553      --.-K/s   in 0.02s   \r\n\r\n2012-10-10 21:50:20 (890 KB/s) - `rubygem-hiera-puppet-1.0.0-1.noarch.rpm' saved [18553/18553]\r\n\r\n\u001b]0;demo@membrane:~/vagrant/packages/rpms\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages/rpms $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "cd ..", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "ln -sf rpms/rubygem-hiera-1.1.0-1.noarch.rpm 01_rubygem-hiera.rpm", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0016040802001953125
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "ln -sf rpms/rubygem-hiera-puppet-1.0.0-1.noarch.rpm 02_rubygem-hiera-puppet.rpm", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0015900135040283203
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "ECHO", 
      "data": "ls", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\r", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "WRITE", 
      "data": "\r\n", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "PAUSE", 
      "duration": 0.0012569427490234375
    }, 
    {
      "act": "WRITE", 
      "data": "\u001b[0m\u001b[01;36m00_rsync.rpm\u001b[0m                 \u001b[01;34mrpms\u001b[0m\r\n\u001b[01;36m01_rubygem-hiera.rpm\u001b[0m         \u001b[01;36m02_rubygem-hiera-puppet.rpm\u001b[0m\r\n\u001b]0;demo@membrane:~/vagrant/packages\u0007\u001b[01;32mdemo@membrane\u001b[01;34m ~/vagrant/packages $\u001b[00m ", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }, 
    {
      "act": "READ", 
      "data": "\u0004", 
      "term": "f273c7d4de9c4214970034999cb6a8ad"
    }
  ]
}
