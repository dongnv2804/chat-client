import React, { useEffect, useState } from "react";
import "./index.css";
import { Button, Form, Input, List, Modal, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import socket from "../../socket";
import * as action from "../../redux/action";
import { useHistory } from "react-router-dom";

const RoomPage = () => {
  const [visible, setVisible] = useState(false);
  const [joiRoom, setJoiRoom] = useState(false);
  const [roomCode, setRoomCode] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const search = (value) => {
    console.log(value);
  };
  const { user, rooms } = useSelector((state) => state.home);

  const createRoom = (value) => {
    socket.emit("create room", { ...value, userId: user._id });
    socket.on("chat", (data) => {
      dispatch(action.getRooms({ userId: user._id }));
    });
  };

  useEffect(() => {
    if (user) {
      dispatch(action.getRooms({ userId: user._id }));
    }
  }, [dispatch, user]);

  return (
    <div className="layout main">
      <div className="wrap-room">
        <div className="title">
          <span>List Room</span>
        </div>
        <div className="layout-search">
          <Input.Search
            placeholder="input room code or room name"
            onSearch={search}
          />
          <Button
            type="dashed"
            onClick={() => setJoiRoom(true)}
            className="ml-1"
          >
            Join room
          </Button>
          <Button
            type="primary"
            className="ml-1"
            onClick={() => setVisible(true)}
          >
            Create room
          </Button>
        </div>
        <div className="list-body">
          <List
            itemLayout="horizontal"
            dataSource={rooms}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar=""
                  title={item.name}
                  description={`room code : ${item.roomCode}`}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
      <Modal
        title="Create room"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          initialValues={initialValues}
          onFinish={createRoom}
        >
          <Form.Item name="roomCode" label="room code">
            <Input name="roomCode" />
          </Form.Item>
          <Form.Item name="roomName" label="room name">
            <Input name="roomName" />
          </Form.Item>
          <Row justify="end">
            <Button htmlType="submit" type="primary">
              Create
            </Button>
          </Row>
        </Form>
      </Modal>
      <Modal
        title="Join room"
        visible={joiRoom}
        onCancel={() => setJoiRoom(false)}
        footer={null}
      >
        <Row gutter={[0, 16]}>
          <Input onChange={(e) => setRoomCode(e.target.value)} />
        </Row>
        <Row justify="end">
          <Button
            onClick={() => {
              socket.emit("join room", {
                roomCode: roomCode,
                userId: user._id,
              });
              history.push("/chat");
            }}
            htmlType="submit"
            type="primary"
          >
            Join
          </Button>
        </Row>
      </Modal>
    </div>
  );
};

const initialValues = {
  roomCode: "",
  roomName: "",
};

export default RoomPage;
