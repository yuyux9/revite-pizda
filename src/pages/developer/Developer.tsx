import { useContext } from "preact/hooks";
import Header from "../../components/ui/Header";
import PaintCounter from "../../lib/PaintCounter";
import { AppContext } from "../../context/revoltjs/RevoltClient";
import { useUserPermission } from "../../context/revoltjs/hooks";

export default function Developer() {
    // const voice = useContext(VoiceContext);
    const client = useContext(AppContext);
    const userPermission = useUserPermission(client.user!._id);

    return (
        <div>
            <Header placement="primary">Developer Tab</Header>
            <div style={{ padding: "16px" }}>
                <PaintCounter always />
            </div>
            <div style={{ padding: "16px" }}>
                <b>User ID:</b> {client.user!._id} <br/>
                <b>Permission against self:</b> {userPermission} <br/>
            </div>
            <div style={{ padding: "16px" }}>
                {/*<span>
                    <b>Voice Status:</b> {VoiceStatus[voice.status]}
                </span>
                <br />
                <span>
                    <b>Voice Room ID:</b> {voice.roomId || "undefined"}
                </span>
                <br />
                <span>
                    <b>Voice Participants:</b> [
                    {Array.from(voice.participants.keys()).join(", ")}]
                </span>
                <br />*/}
            </div>
        </div>
    );
}