import { Modal } from "antd";
export default function ItemModal({ visible, setVisible }) {
    const hideModal = () => {
        setVisible(false);
    };
    return (
        <>
            <Modal
                visible={visible}
                footer={null}
                keyboard={true}
                onCancel={hideModal}
                title="List Item"
            ></Modal>
        </>
    );
}
