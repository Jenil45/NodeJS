class WebRTCService
{
    constructor()
    {
        if(!this.peer)
        {
            this.peer = new RTCPeerConnection({
                iceServers : [
                    {
                        urls : [
                            "stun:stun.l.google.com:19302",
                            "stun:global.stun.twilio.com:3478",
                        ]
                    }
                ]
            });
        }
    }

    async createAnswer(offer)
    {
        if(this.peer)
        {
            // first it set remote users fetched offer
            await this.peer.setRemoteDescription(offer)

            // create a answer to send to the first user
            const ans = await this.peer.createAnswer();
            
            // set ans to our localDescription
            await this.peer.setLocalDescription(ans)

            return ans;
        }
    }

    async setAnswerToRemote(ans){
        if(this.peer)
        {
            await this.peer.setRemoteDescription(ans);
        }
    }

    async createOffer() {
        if(this.peer)
        {
            const offer = await this.peer.createOffer();
            // await this.peer.setLocalDescriptor(new RTCSessionDescription(offer));
            console.log("created offer ",offer);
            await this.peer.setLocalDescription(new RTCSessionDescription(offer));

            return offer;
        }
    }
}

export default new WebRTCService()