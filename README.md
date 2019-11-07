# reading

> 项目使用dva antd-mobile less


## 环境的切换 
> services/example 中切换   
```
const url1 = 'http://123.114.202.86:8848' //测试环境
const url1 = 'http://39.108.92.68/youkong' //生产环境

```
> 然后 npm start 重启   
> 上线前请注意环境的切换

## Git分支管理
暂无其他分支 主分支mast

>  日常提交 
```
git add .
git commit -m '提交注释'
git pull && git push    
```
>  创建分支 
```
// 1. 查看本地/远程的全部分支,查看当前分支
git branch -a
// 2. 创建本地分支并切换到创建的分支   
git checkout -b newbranch
// 3. 将新创建的本地分支推送到远程
git push origin newbranch:newbranch
// 4. 把本地的新分支，和远程的新分支关联
git push --set-upstream origin newbranch
// 5. 在本地创建一个远程已经有的分支并建立关联
git checkout –b branchName origin/branchName
```
> 删除分支 
```
// 1. 查看当前分支   
git branch -a   
// 2. 删除本地分支
git branch –d branchName
// 3. 删除远程分支
git push origin –d branchName
```
> 合并分支  
使用vsCode的分支管理  从 A分支合并到B分支
1. 切换到B分支  
2. shift+ctrl+p  输入： git 合并  后选择合并分支
3. 选择一个本地的分支进行合并  
4. 合并后检查有无冲突，有冲突解决冲突，无冲突提交到远程对应的分支   

> 上线后打tag   
```
// 1. 本地master打tag
git tag –a v0.1.0 –m ’v0.1.0’
// 2. 推送tag到远程 
git push origin [tagname]
```

## 运行步骤

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm start

# build for production and launch server
$ yarn run build
```
