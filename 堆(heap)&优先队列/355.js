/**
 * leetcode: 355. 设计推特
 * 
 * 设计一个简化版的推特(Twitter)，可以让用户实现发送推文，
 * 关注/取消关注其他用户，能够看见关注人（包括自己）的最近十条推文。
 * 
 * 你的设计需要支持以下的几个功能：
 *   postTweet(userId, tweetId): 创建一条新的推文
 *   getNewsFeed(userId): 检索最近的十条推文。每个推文都必须是由此用户关注的人或者是用户自己发出的。推文必须按照时间顺序由最近的开始排序。
 *   follow(followerId, followeeId): 关注一个用户
 *   unfollow(followerId, followeeId): 取消关注一个用户
 *  
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/design-twitter
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * Initialize your data structure here.
 */

var stamp = 0
var Twitter = function() {
    // 存储用户信息
    this.userMap = new Map()
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.userMap.has(userId)) {
        this.userMap.set(userId, new User(userId))
    }

    let tweetsList = this.userMap.get(userId).tweets
    tweetsList.unshift({id: tweetId, time: stamp++})
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let res = []
    if(!this.userMap.has(userId)) return res

    // 创建一个小顶堆记录, 记录
    let heap = new Heap(CMP2)

    // 获取关注人id 集合
    let follows = [...this.userMap.get(userId).followList]

    for(let i=0; i < follows.length; i++) {
        if(!this.userMap.has(follows[i])) continue;
        let tweets = this.userMap.get(follows[i]).tweets
        for(let j=0; j<tweets.length; j++) {
            if(heap.size()==10 && heap.top().time > tweets[j].time) break
            heap.push(tweets[j])
            if(heap.size()>10) heap.pop()
        }
    }
    
    return heap.output().sort((a, b)=> b.time-a.time).map(val=>val.id)
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.userMap.has(followerId)) {
        this.userMap.set(followerId, new User(followerId))
    }

    this.userMap.get(followerId).follow(followeeId)
    return 
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.userMap.has(followerId)) {
        this.userMap.get(followerId).unfollow(followeeId)
    }
    return
};

// 创建用户实例
var User = function(userId) {
    this.id = userId
    this.followList = new Set()
    this.tweets = []

    this.follow(userId)
}

// 用户关注其他用户
User.prototype.follow = function(userId) {
    this.followList.add(userId)
}
// 用户取消关注
User.prototype.unfollow = function(userId) {
    this.followList.delete(userId)
}

// 创建大顶堆
function CMP1(a, b) {
    return a.time < b.time
}

// 创建小顶堆
function CMP2(a, b) {
    return a.time > b.time
}
/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */

let twitter = new Twitter()
twitter.postTweet(2, 5)
twitter.getNewsFeed(2)
twitter.follow(2, 3)
twitter.postTweet(3, 6)
twitter.getNewsFeed(2)
twitter.unfollow(2, 3)
twitter.getNewsFeed(2)